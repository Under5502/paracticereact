import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import TableUsers from "./components/TableUsers";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <TableUsers />
        </Container>
      </div>
      <ToastContainer
        position="top-right" // Vị trí của thông báo: top-right, top-left, bottom-right, etc.
        autoClose={3000} // Tự động đóng sau 3000ms (3 giây)
        newestOnTop={false} // Toast mới có xuất hiện trên cùng không?
        theme="dark" // Chủ đề của toast (light, dark, hoặc colored)
      />
    </>
  );
}

export default App;
