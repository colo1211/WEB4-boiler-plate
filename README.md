# boiler-plate
웹 개발공부 4. React, Express.JS Connect
<hr/> 

## Skill Stack 
```
Back-End : Express.js
Front-End : React.js 
```

## React&Express_Core 폴더 내에 학습을 진행하며 얻은 지식들을 md파일로 정리하였음.

## 해당 Repo 학습을 통해 얻은 것
##### ⚠ Server 와의 Interaction 통신 및 Redux를 통한 상태관리를 위한 레포이므로, CSS 및 디자인 레이아웃에 대한 요소는 배제하였음. 

##### 1. Front-End 와 Back-End 간의 데이터 통신을 위해 `axios 라이브러리`를 활용하여 Front-End 상에서 `Data-Binding` 하는 방법을 학습하였음. 
##### 2. Front-End 에서 로그인/회원가입/로그아웃 등 Back-End에게 request 보내고, 이를 `Redux 를 통해 state 관리` 하였음. 
##### 3. `HOC (Higher Order Component)` 에 대해 학습하고 이를 활용한 User의 권한을 파악하여 접근가능페이지/접근불가능페이지 등으로 Routing 하였음.



<hr/>

## 구현 이미지 

### LandingPage 
* 로그인 한 유저만 접근이 가능 
![image](https://user-images.githubusercontent.com/63600953/133247819-e7c27645-dd8c-4740-89f7-5096ab329e28.png)
</br></br></br>

### LoginPage
* 로그인을 안한 유저만 접근이 가능
![image](https://user-images.githubusercontent.com/63600953/133248036-402a26dd-fd71-44a7-9a9a-20974383eb8a.png)
</br></br></br>

### RegisterPage
* 로그인을 안한 유저만 접근이 가능
![image](https://user-images.githubusercontent.com/63600953/133248087-32e5f7b4-081e-48f9-a225-2c79fa8adbec.png)
</br></br></br>
<hr/>

### HOC 컴포넌트 Auth를 활용하여 권한에 따른 페이지 접근 및 거부를 부여

```
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
          <Switch>
            {/*(option)*/}
            {/*null : 아무나 출입이 가능한 페이지, Landing Page*/}
            {/*true : 로그인한 유저만 출입이 가능한 페이지*/}
            {/*false : 로그인한 유저 출입 불가 페이지*/}
            <Route exact path="/" component = {Auth(LandingPage,null )}/>
            <Route path="/login" component = {Auth(LoginPage,false )}/>
            <Route path="/register" component = {Auth(RegisterPage, false )}/>
          </Switch>
      </div>
    </Router>
  );
}
```
