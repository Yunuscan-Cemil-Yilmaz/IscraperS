# Project Structure

src/
  app/
    ⚙ app.config.ts
    📜 app.routes.ts

    core/
      auth/
        🛠 auth.service.ts
        🛡 auth.guard.ts
        🌐 auth.interceptor.ts
      http/
        🛠 api-client.ts
        🌐 error.interceptor.ts
      config/
        🛠 app-config.service.ts
      layout/
        📦 shell.component.ts

    shared/
      ui/
        button/
          📦 button.component.ts
        card/
          📦 card.component.ts
      directives/
        🔧 some.directive.ts
      pipes/
        🔧 some.pipe.ts
      utils/
        🔧 helpers.ts

    features/
      products/
        📜 products.routes.ts

        data-access/
          🛠 products.api.ts
          📄 products.dto.ts
          🔄 products.mapper.ts
          🔧 products.endpoints.ts   # sabitler

        domain/
          🗄 products.models.ts
          🛠 products.service.ts     # iş kuralları

        state/
          🛠 products.store.ts
          🔧 products.selectors.ts

        pages/
          list/
            📦 list.component.ts
          detail/
            📦 detail.component.ts

        ui/
          product-list/
            📦 product-list.component.ts
          product-detail/
            📦 product-detail.component.ts

  assets/
    config.json


## Dictionary

📦 Component files are UI → only view + Input/Output, while containers inject store/service.

🛠 Service files are injectable → can be API, domain logic, state, or global service.

📜 Routes files only define routes, they are not components or services.

📄 DTO → the raw data type sent/received by the backend.

🗄 Model → the application’s own domain type (used in UI and business rules).

🔄 Mapper → converts a DTO into a domain model (and vice versa if needed).

🛡 Guard, 🌐 Interceptor are special provider types in Angular.

⚙ Config → configuration/provider files that run during bootstrap.

🔧 Util → pure helper functions, directives, and pipes.

