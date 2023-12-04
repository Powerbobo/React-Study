// component란, 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위해 사용하는 코드 블록 단위
// 첫 번째 줄에서 임포트한 component를 상속받아 R003_ImportComponent 클래스ㄹ에서 사용한다.
// return된 html 코드를 render() 함수를 사용해 화면에 표시한다.

import React, { Component } from 'react';

class R003_ImportComponent extends Component {
    render () {
        return (
            <h2>[THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
}

export default R003_ImportComponent;