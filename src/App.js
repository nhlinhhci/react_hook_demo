import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import BTChonXe from "./Pages/Hook/BTChonXe/BTChonXe";
import UseEffectDemo from "./Pages/Hook/UseEffectDemo/UseEffectDemo";
import UseStateDemo from "./Pages/Hook/UseStateDemo/UseStateDemo";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {/* exact để so sánh path chính xác */}
          <Route path="/" exact component={Home}></Route>
          {/* Cách 1 */}
          <Route path="/home" exact component={Home}></Route>
          {/* Cách 2: dùng khi muốn thêm thắt layout trước khi goi file */}
          <Route
            path="/login"
            exact
            render={(propsRoute) => {
              return (
                <div className="container">
                  <h1>login</h1>
                  {/* truyền propsRoute ở đây để thừa hưởng các props của Route như ở cách 1 (để liên kết với các trang khác) */}
                  <Login {...propsRoute} />
                </div>
              );
            }}
          ></Route>
          {/* Set trang chủ */}
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/demousestate" exact component={UseStateDemo}></Route>
          <Route path="/demouseeffect" exact component={UseEffectDemo}></Route>
          <Route path="/baitapchonxe" exact component={BTChonXe}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
