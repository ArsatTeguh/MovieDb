import React,{useState,useEffect} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./userCss/Login.css";
import { Container, Button } from "react-bootstrap";

const DataUser = () => {
  const navigate = useNavigate();
  const [nama, setnama] = useState("");
  const [token, setToken] = useState([]);
  const [expire, setExpire] = useState("");

  const userLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/token");
      const decoded = jwtDecode(response.data.accesToken);
      setToken(response.data.accesToken);
      setnama(decoded.nama);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const getData = async () => {
    const response = await axiosJwt.get("http://localhost:5000/user/data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  };


  // cara penggunaan axios interceptors
  const axiosJwt = axios.create()

  // axios interceptors berfungsi melakukan pengecekan sebelum memulai request
  axiosJwt.interceptors.request.use(async(config)=> {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()){
      const response = await axios.get('http://localhost:5000/user/token');
      config.headers.Authorization = `Bearer ${response.data.accesToken}`
      const decoded = jwtDecode(response.data.accesToken);
      setToken(response.data.accesToken);
      setnama(decoded.nama);
      setExpire(decoded.exp);
    }
    return config;
  },(e)=> {
    return Promise.reject(e)
  });


  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/user/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userLogin()
  },[]);

  return (
    <>
      <Container>
        <Button onClick={getData} className="mt-3" variant="success">
          Get data
        </Button>
        <h1>Selamat Datang, {nama}</h1>

        <Button onClick={Logout} className="mt-3" variant="warning">
          Log Out
        </Button>
        {/* <div className="mt-5">
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Password</th>
                <th>Refresh Token</th>
              </tr>
            </thead>
            <tbody>
              {dataDiri.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.nama}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.refresh_token}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div> */}
      </Container>
    </>
  );
};

export default DataUser;
