import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SearchBoxComponent } from '../presentation/components/search-box.component';
import { HomePage } from '../presentation/pages/home.page';
import { NotFoundComponent } from '../presentation/pages/not-found.page';
import { ProductDetailPage } from '../presentation/pages/product-detail.page';
import { ProductListPage } from '../presentation/pages/product-list.page';

export function App() {
  return (
    <Router>
      <div>
        <SearchBoxComponent />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/items" exact>
            <ProductListPage />
          </Route>

          <Route path="/items/:id" exact>
            <ProductDetailPage />
          </Route>

          <Route path="*" exact={true} component={NotFoundComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
