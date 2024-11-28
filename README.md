# MBTI Test 프로젝트

## ✨ 프로젝트 소개

간단한 MBTI 테스트를 제공하는 웹 어플리케이션입니다. 사용자가 질문에 답변하면 MBTI 유형을 분석하여 결과를 보여줍니다

## ⏲️ 개발기간

- 2024.11.25(월) ~ 2024.11.28(목)

## 🚀 배포 링크

https://mbti-test-pink.vercel.app/ 👈 클릭!

## 🛠 기술 스택

### ✔️ Front end

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white)
![React Query](https://img.shields.io/badge/Tanstack%20Query-FF4154?style=for-the-badge&logo=Tanstack%20Query&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white)
![React Toastify](https://img.shields.io/badge/React%20Toastify-FF6138?style=for-the-badge&logo=React&logoColor=white)
![UUID](https://img.shields.io/badge/UUID-6F42C1?style=for-the-badge&logo=UUID&logoColor=white)

### ✔️ Back end

![JSON Server](https://img.shields.io/badge/JSON%20Server-003B57?style=for-the-badge&logo=JSON%20Server&logoColor=white)

## 📋 기능

### 🛡 회원가입 및 로그인

- JWT를 기반으로 로그인/회원가입을 할 수 있습니다
- ProtectedRoute : 비로그인 사용자는 테스트 및 결과 페이지에 접근 할 수 없습니다

### 📝 회원 정보 수정

- 회원은 Profile에서 닉네임을 변경할 수 있습니다

### 🖋 MBTI 테스트 CRUD

- Create: 로그인한 사용자의 응답 데이터를 기반으로 MBTI 유형을 계산하고, 해당 결과를 서버에 저장합니다.
- Read: 저장된 테스트 결과는 Results 탭에서 카드 형태로 제공합니다.
- Update: 사용자는 자신의 테스트 결과를 비공개/공개 처리 할 수 있습니다.
- Delete: 사용자는 자신이 작성한 테스트 결과를 삭제할 수 있습니다.

## 📁 디렉터리 구조

```
src/
├── api/                   # API 관련 로직
├── axios/                 # axios 인스턴스 관리
├── components/            # 컴포넌트 폴더
│   └── ui/                # UI 컴포넌트들 (버튼, 카드 등)
├── context/               # 인증 관련 context
├── data/                  # MBTI 질문 데이터
├── hooks/                 # 커스텀 훅
├── pages/                 # 페이지 컴포넌트
├── router/                # 라우팅 관련 파일
│   └── ProtectedRoute.jsx # 인증된 사용자만 접근 가능한 라우트
│   └── NonAuthenticatedRoute.jsx # 비인증 사용자만 접근 가능한 라우트
│   └── Router.jsx         # 라우트 설정
├── utils/                 # 유틸리티 함수들
│   └── calculateMBTI.js   # MBTI 계산 로직
└── └── mbtiDescriptions.js # MBTI 유형 설명
```
