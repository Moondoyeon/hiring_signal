![opengraph-image](https://github.com/Moondoyeon/hiring_signal/assets/102936206/41fabf25-7ea5-463b-8399-3532432c6ebe)
_저를 소개하는 포트폴리오 웹입니다. 예능프로그램 하트시그널에서 아이디어를 얻어 채용담당자분의 시그널을 받겠다는 마음을 담아 개발했습니다._

**URL**: [hiring-signal.vercel.app](http://hiring-signal.vercel.app/)
<br/>
**개발기간:** 2023년 12월 8일-2024년 1월 5일(4주)
<br/>
**개발기여도**: 100%
<br/>
**기술스택**
<br/>
Next.js(v14, App Router), React(v18), TypeScript, Recoil, React-Query(v5), React Hook Form, Tailwind CSS, MongoDB, Vercel, Yarn, nodemailer, react-responsive, remixicon, Eslint, Prettier

## 구현내용

### 타이핑 효과

requestAnimationFrame을 활용해 재귀함수로 동작하는 타이핑 효과를 구현했습니다. 최초에 setInterval 함수로 구현했으나, 성능상 이점이 많다고 판단하여 rAF를 사용했습니다. 모니터 주사율과 상관없이 콜백함수의 호출주기를 설정할 수 있는 커스텀 훅을 작성해 구현하였습니다. (정확히는 모니터 주사율이 60Hz 인 경우, 최소 1 fps에서 최대 60 fps까지 설정 가능합니다)

### 특정 섹션으로 스크롤 이동

최초에 react-scroll 라이브러리로 스크롤 이동을 구현했지만, 해당기능 외에 스크롤 관련 기능을 구현할 때 라이브러리 함수를 고려해야 한다는 점, 특정 prop을 전달했을때 자연스럽게 적용되지 않는 점이 불편하게 느껴져 document.getElementById.scrollIntoView 함수를 이용해 스크롤 이동을 직접 구현했습니다.

### 스크롤 위치 관찰

Intersection Observer API와 useRef를 활용해 뷰포트에 진입한 요소가 무엇인지 즉 현재 유저가 보고있는 컨텐츠가 무엇인지에 따라 특정 CSS가 적용되게 하였습니다.

- 유저가 보고있는 섹션 이름에 borderBottom 적용
- 특정 섹션이 관찰될 때 페이지 배경색깔 제어
  <br/>
  <img width="330" alt="스크롤 위치 관찰" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/f9257946-4fb3-4f62-8814-413cab4d5cad">

### 스크롤이벤트에 throttle 개념 적용

스크롤 방향에 따라 헤더 가시성을 결정하는 로직에 throttle 개념을 적용해 콜백함수의 호출주기를 제어하여 잦은 함수호출을 막아 렌더링 성능을 개선하였습니다.
|**성능개선 전**|**성능개선 후**|
|-|-|
|스크롤 이벤트 발생횟수 = 콜백함수 호출횟수<br/><img width="350" alt="스트롤전" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/dc7752ea-acbb-4704-b1e5-f378a6b0b1c6">|0.25초에 한번씩 콜백함수 호출<br/><img width="350" alt="스로틀 후" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/a8d1ce52-1e91-4b85-96dc-5b50866ff79d">|

### 캐러셀

캐러셀 구현을 위한 custom hook과 전용 컴포넌트를 만들어 주요 컨텐츠를 표현하는 데에 3번 재사용했습니다. 캐러셀 버튼을 클릭하거나 마우스 드래그 혹은 터치 슬라이드를 통해 캐러셀 아이템을 좌우로 넘길 수 있습니다.
<br/>
<img width="500" alt="스크롤 위치 관찰" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/111ba900-1bd5-43a3-a2c7-53deb8d1f571">

### React Hook Form 으로 폼 데이터 관리

ref 기반의 비제어 컴포넌트 방식으로 폼 데이터를 관리하여 잦은 리렌더링을 방지하고, 입력값의 유효성 검사 등을 간편하게 처리할 수 있다는 이점을 경험해보고자 react-hook-form을 사용했습니다.

- useController와 제네릭 타입 선언을 통해 재사용가능한 공통 컴포넌트(Input, Textarea)를 만들었습니다.
- 폼제출 버튼을 클릭하면, 입력값에 대한 유효성 검사가 발생하고, 통과하면 nodemailer 라이브러리를 통해 저를 수신자로 한 이메일 전송이 이뤄지도록 구성했습니다.

### React Query의 Optimistic Update로 UI 즉각 업데이트

최초에는 단순히 쿼리 무효화 함수를 사용해 클라이언트 상태와 서버상태를 동기화했지만, UI 업데이트에 2-3초가 소요되어 느리다고 판단했습니다. 이에 유저의 데이터 변경 요청이 서버에 넘어가기도 전에, UI가 바뀌도록 하는 낙관적 업데이트를 적용해 사용자 경험을 높였습니다

| Before: 쿼리무효화 함수 사용<br/>(우측하단 번개아이콘 버튼을 봐주세요)                                                                            | After: 낙관적 업데이트 적용                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="330" alt="낙관적업데이트 전" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/09f9974d-e567-4860-8445-59290161b363"> | <img width="330" alt="낙관적업데이트 후" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/b36f9f0e-db98-4d0e-b775-c2d4bf910f7b"> |

### GET, POST API 로직 작성

Next.js가 제공하는 Route Hanlders 기능을 통해 GET, POST 메서드에 대한 API 응답 로직을 작성하여 mongoDB 데이터 입출력을 관리했습니다.

### 반응형 웹 적용

react-responsive 라이브러리와 tailwind.config.js의 screens 설정을 통해 핸드폰, 타블렛, 노트북과 데스크탑에 대응하는 반응형 웹을 구현했습니다.
<br/>
<img width="330" alt="반응형 웹" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/7caeb11e-6f61-442b-8ec9-b68d460f4c7b">

### 최적화

Next.js는 다양한 최적화 기능을 제공합니다. 그 중 직접 설정한 기능은 다음과 같습니다.

**메타데이터**<br/>
app 폴더 아래에 공식문서 예시를 따라 아래와 같은 파일을 만들면(혹은 제공하면), Next.js가 알아서 메타태그를 생성해주는 등 간단하게 SEO처리를 할 수 있습니다.<br/>

- manifest.ts, robot.ts, sitemap.ts<br/>
- opengraph-image, opengraph-image.alt.txt, twitter-image, twitter-image.alt.txt<br/>
- icon.png, apple-icon.png<br/>
  <img width="450" alt="메타데이터" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/e1ad5933-e214-4e11-9ca8-5664fbc461ca">
  <br/>
  <span>카카오톡 공유 / 트위터 공유 / 홈화면 아이콘</span>

**이미지**<br/>
Next.js는 이미지 최적화를 위해 sizes prop을 제공하면 자동으로 디바이스에 맞는 이미지를 제공해주고, 알아서 파일포맷을 webp 로 적용해줍니다. 자동으로 레이아웃 누적이동 방지, lazy loading을 적용해줍니다.<br/>
저는 sizes prop을 통해 유저 뷰포트에 적합한 이미지를 제공했고, LCP 이미지에 priority 속성을 적용해서 해당 이미지가 우선으로 로딩되게 했습니다.

**웹폰트**<br/>
next/font/google가 제공하는 구글폰트를 사용했습니다. 기존에는 브라우저의 네트워크 요청을 통해 웹폰트를 다운받는 방식을 취하다가, 공식문서에서 next/font 를 이용하면 빌드시에 폰트가 다운되어 브라우저가 더이상 네트워크 요청을 하지 않게 된다는 설명을 읽고, 페이지 로드 속도를 높일 수 있다는 이점을 취하고자 next/font를 사용했습니다.

## 구현화면

### 타이핑효과

<img width="330" alt="typing" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/acade8a9-a884-4433-bc20-caf91f72e58d">

### 스크롤 이동

<img width="330" alt="scroll moving" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/3d917623-85fd-4c68-ad92-4eff5d2674ff">

### 캐러셀

| 1                                                                                                                                        | 2                                                                                                                                        | 3                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="330" alt="carousel" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/d484fb14-09db-40d7-b887-0b49c1f9d844"> | <img width="330" alt="carousel" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/3c37c388-4c47-4de1-84ca-e150b431278c"> | <img width="330" alt="carousel" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/33f6b152-871e-4f57-859c-a7006e589667"> |

### 마우스 오버시 배경색깔 변화

| 1                                                                                                                                                             | 2                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="330" alt="bgcolor change when mouseover" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/1ccd023a-376e-4914-a051-981c0ab7ba50"> | <img width="330" alt="bgcolor change when mouseover" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/7c431592-0366-429c-81a5-beb90954330d"> |

### 폼 데이터 유효성 검증

<img width="330" alt="form data management" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/0ebfed72-3498-464a-adae-f46b320fdfd7">

## 기타

### UI Prototype ([Figma](https://www.figma.com/file/W8NbFXZV9rpYsQhhi3PWjJ/%EC%B1%84%EC%9A%A9%EC%8B%9C%EA%B7%B8%EB%84%90?type=design&node-id=0-1&mode=design&t=GzOjsb9hdM3X7BEx-0))

<img width="330" alt="UI prototype" src="https://github.com/Moondoyeon/hiring_signal/assets/102936206/762fe399-7e8f-49ea-82f7-d357ff40ccc9">

### 프로젝트 시작

```
yarn  // 설치
yarn dev // 시작
```
