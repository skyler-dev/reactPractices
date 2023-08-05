# React 연습을 위한 저장소

- form 연습
    - 유효성 검사를 용이하게 하기 위해 React-Hook-Form 라이브러리 사용
    - 키 props 처리하기 위해 uuid 라이브러리 사용
    - 컴포넌트 구조
        - 부모(LoginedList.jsx)에서 자식으로 함수를 전달하고,
        - 자식(LoginFormWithReactHookForm.jsx)에서 간접호출합니다.
        - 이유 : 폼 제출 후 부모의 상태를 갱신하기 위함입니다.
        
        ```
        App.jsx
        	ㄴ LoginedList.jsx
        			ㄴ LoginFormWithReactHookForm.jsx
        ```
        
    - 결과 gif
        
        ![리스트와 폼은 부모자식간의 컴포넌트](https://github.com/skyler-dev/reactPractices/assets/132126027/cfc075bc-b8a8-4662-b31b-b5a9c6284604)
        
        
    - 참고자료 및 학습내용은 아래 정리되어 있습니다.
        - <https://skyler-dev.notion.site/63de7528f5374a479845939422aab288?pvs=4>



### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
