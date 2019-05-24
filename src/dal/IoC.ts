import { Container, ContainerModule, interfaces } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';
import { RouterStore } from 'mobx-react-router';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

const provide = {
  singleton: () => (target: any) =>
    fluentProvide(target)
      .inSingletonScope()
      .done()(target),

  transient: () => (target: any) =>
    fluentProvide(target)
      .inTransientScope()
      .done()(target),
};

interface IProvideSyntax {
  constraint: (bind: interfaces.Bind, target: any) => any;
  implementationType: any;
}

container.bind(RouterStore).toConstantValue(new RouterStore());

const PROVIDE_METADATA_KEY = 'inversify-binding-decorators:provide';

const lazyInject = (identifier: any) => (target: any, key: string, descriptor?: any) => {
  const isBound = container.isBound(identifier);
  if (!isBound) {
    const provideMetadata = (Reflect.getMetadata(PROVIDE_METADATA_KEY, Reflect) || []).filter(
      (metadata: IProvideSyntax) => metadata.implementationType === identifier
    );

    if (provideMetadata.length === 0) {
      throw new Error(`Provided identifier isn't registered: ${identifier}`);
    }

    container.load(
      new ContainerModule(bind => {
        provideMetadata.forEach((metadata: IProvideSyntax) =>
          metadata.constraint(bind, metadata.implementationType)
        );
      })
    );
  }
  descriptor.initializer = () => container.get(identifier);
};

export { container, provide, lazyInject };
