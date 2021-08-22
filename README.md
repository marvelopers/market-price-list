# market-price-list

## 시작하기

레포지토리를 clone 혹은 다운로드 후, 아래 명령어로 필요한 툴들을 설치한다.

```bash
yarn install
```

서버를 구동시키고, 결과물을 [http://localhost:3000](http://localhost:3000)에서 확인한다.

```bash
yarn start
```

## 사용한 주요 툴

- react : 17.0.2
- typescript : 4.1.2
- react-router-dom : 5.2.0
- redux: 4.1.1
- emotion/css: 11.1.3
- emotion/react: 11.4.1
- emotion/styled: 11.3.0
- reduxjs/toolkit: 1.6.1
  상태관리 라이브러리로 action과 reducer를 한 번에 정의할 수 있고 Immer가 내장되어 있는 redux-toolkit 사용
- qs : 6.10.1
  API 통신 시 파라미터 객체를 쿼리 문자열변환하기 위해 사용

## 폴더 구조

```sh
src
 ├─ component
 │     ├─ common
 │     │     ├─ Loader
 │     │     ├─ MenuBar
 │     │     └─ Button
 │     ├─ icons
 │     │     ├─ CloseIcon
 │     │     └─ StarIcon
 │     ├─ Layout
 │     │     └─ index
 │     ├─ market
 │     │     ├─ SelectCurrency
 │     │     ├─ CoinName
 │     │     ├─ MarketList
 │     │     ├─ MarketListHead
 │     │     ├─ MarketListItem
 │     │     ├─ Percentage
 │     │     └─ Price
 │     ├─ modals
 │     │     ├─ AlertModal
 │     │     ├─ InfoModal
 │     │     ├─ ModalWrapper
 │     │     └─ ModalController
 │     └─ page
 │           ├─ HomePage
 │           ├─ LikePage
 │           └─ MarketPage
 ├─ constants
 │     ├─ currency
 │     ├─ menu
 │     └─ modal
 ├─ hook : 기능 단위로 custom hook을 생성
 │     ├─ dom - useBodyScrollLockEffect, useModalBackground : 모달을 위한 hook
 │     ├─ useGetCoinLikeClick : 북마크 기능을 위한 hook
 │     ├─ useGetCoinNameClick : 코인정보 모달을 위한 hook
 │     └─ useGetLoadMore : 더보기 기능을 위한 hook
 ├─ model
 │     └─ market
 ├─ reducer
 │     └─ index
 ├─ selector
 │     ├─ index
 │     └─market
 ├─ store
 │     └─ store
 ├─ styles
 │     ├─ colors
 │     ├─ GlobalStyle
 │     └─ ZIndex
 └─ utils
       ├─ api
       └─ ModalHandler
```

## 코드 스타일

- 컴포넌트의 스타일이 2개 이하이면 하나의 파일로 작성한다.
  - `Compoent.tsx`
- 컴포넌트의 스타일이 3개 이상이면 스타일 파일을 분리하여 컴포넌트 폴더를 사용한다.
  - `Component/index.tsx`, `Component/styles.ts`
- 컴포넌트는 대문자로 시작한다.
  - `Component.tsx` (O)
  - `component.tsx` (X)
- 비슷한 컴포넌트들은 한폴더에 묶어서 사용하되, 그 폴더 이름은 소문자로 사용한다.
  - `market/SelectCurrency.tsx`
  - `market/MarketList.tsx`
