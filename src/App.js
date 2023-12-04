import logo from './logo.svg';
import './App.css' // css import
import ImportComponent from './R003_ImportComponent' // App.js 파일과 같은 경로에 위치한 R003_ImportComponent.js파일을 임포트 해 사용할 수 있도록 함.
// import LifecycleEx from './R004_LifecycleEx'
// import LifecycleEx from './R005_LifecycleEx'
// import LifecycleEx from './R006_LifecycleEx'
import LifecycleEx from './R007_LifecycleEx'

// .jsx에 html 적용하기
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <ImportComponent></ImportComponent> */}
      <LifecycleEx
        prop_value = 'FromApp.js' // App.js에서 임포트한 component인 R006_LifecycleEx로 prop_value라는 변수를 전달한다.
      />
    </div>
  );
}

export default App;
