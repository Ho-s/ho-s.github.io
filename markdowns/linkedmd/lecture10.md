---
date: "2021-01-11"
title: "알고리즘 공부 기록/강의10"
path: "/lecture/10"
---

## 개발형 코딩테스트
- 개요
    - **정해진 목적에 따라서 동작하는 완성된 프로그램을 개발**하는 것을 요구하는 코딩테스트 유형이다.
    ![image](https://user-images.githubusercontent.com/71132893/104155467-a182de00-542a-11eb-8e0a-413a42978737.png)
    - 일부 기업은 해커톤을 통해 채용을 진행한다.
        - **해커톤(Hackathon)**이란 <u>단기간에 아이디어를 제품화하는 프로젝트 이벤트</u>이다.
        - 대개 1~2일 정도 진행되며 다수의 해커톤이 대회 형식을 빌려 해커톤이 끝나면 모든 프로그램을 시연하고 발표한 다음 채점을 진행한다.
    - 개발형 코딩 테스트는 분야에 따라 상세 요구사항이 다를 수 있다.
        - 예시 1)모바일 클라이언트 개발 : 안드로이드, iOS앱 개발
        - 예시 2)웹 서버 개발 : 스프링(Spring), 장고(Django) 등의 서버 개발 프레임워크 활용
    - 하지만 분야에 상관없이 꼭 알아야 하는 개념과 도구에 대해서 학습할 필요가 있다.
        - 서버, 클라이언트, JSON, REST, API, ...
### 서버와 클라이언트
![image](https://user-images.githubusercontent.com/71132893/104155717-1c4bf900-542b-11eb-9f8d-3a0cc5e44e03.png)
- 클라이언트(Client) = 고객
    - 서버로 요청(Request)을 보내고 응답(Response)이 도착할 때까지 기다린다.
    - 서버로부터 응답을 받은 뒤에는 서버의 응답을 화면에 출력한다.
        - 예시 1) 웹 브라우저 : 서버로부터 받은 HTML, CSS코드를 화면에 적절한 형태로 출력한다.
        - 예시 2) 게임 앱 : 서버로부터 받은 경험치, 친구 귓속말 등의 정보를 화면에 적절한 형태로 출력한다.
        ![image](https://user-images.githubusercontent.com/71132893/104155896-75b42800-542b-11eb-91db-9ee1cd4e41cb.png)
- 서버(Server) = 서비스 제공자
    - 클라이언트로부터 받은 요청(Request)을 처리해 응답(Response)을 전송한다.
        - 예시) 웹 서버 : 로그인 요청을 받아 아이디와 비밀번호가 정확한지 검사하고 그 결과를 응답한다.
        ![image](https://user-images.githubusercontent.com/71132893/104156024-aac07a80-542b-11eb-93fe-4a495cf21793.png)
- HTTP 개요
    - **HTTP(HyperText Transfer Protocol)**은 <u>웹상에서 데이터를 주고받기 위한 프로토콜</u>을 의미한다.
        - 보통은 웹 문서(HTML파일)를 주고 받는 데 사용된다.
        - 모바일 앱 및 게임 개발 등에서 특정 형식의 데이터를 주고받는 용도로도 사용된다.
    - 클라이언트는 <u>요청의 목적에 따라서</u> 적절한 HTTP 메서드를 이용해 통신을 진행한다.
        - 대표적인 **HTTP 메서드**는 다음과 같다.
        ![image](https://user-images.githubusercontent.com/71132893/104156201-f7a45100-542b-11eb-9537-7327133ae765.png)
- 파이썬 웹 요청 예제: GET방식

```python
import requests

target = "http://google.com"
response = requests.get(url = target)
print(response.text)
```

- 실행 결과
![image](https://user-images.githubusercontent.com/71132893/104156582-bceee880-542c-11eb-8dde-9b7fdecf3249.png)


### 개발형 코딩테스트 준비하기
- 다음은 2020 카카오 2차 코딩 테스트 안내문에 쓰여 있던 문장이다.
    >오프라인 코딩 테스트에서는 JSON format의 데이터를 응답하는 REST API를 활용해아 하니, REST API 호출과 JSON format 데이터를 파싱해 활용할 수 있는 parser 코드를 미리 준비해 오시기 바랍니다.
- 개발형 코딩 테스트의 핵심 키워드 : REST API, JSON

### REST
- REST의 등장 배경
    - HTTP는 GET, POST, PUT, DELETE 등의 <u>다양한 HTTP 메서드를 지원</u>한다.
        - 실제로는 서버가 각 메서드의 기본 설명을 따르지 않아도 프로그램을 개발할 수 있다.
        - 하지만 저마다 다른 방식으로 개발하면 문제가 될 수 있어 기준이 되는 아키텍처가 필요하다.
        ![image](https://user-images.githubusercontent.com/71132893/104157043-ad23d400-542d-11eb-9d0c-432db2dbac77.png)

- REST 개요
    - **REST(Representational State Transfer)**는 <u>각 자원(Resource)에 대하여 자원의 상태에 대한 정보를 주고받는 개발 방식</u>을 의미한다.
    - REST의 **구성 요소**
        - <span style='color:red'>자원(Resource)</span>: URI를 이용
        - <span style='color:blue'>행위(Verb)</span>: HTTP 메서드를 이용
        - <span style='color:green'>표현(Representations)</span>: 페이로드를 이용
        ![image](https://user-images.githubusercontent.com/71132893/104157210-0b50b700-542e-11eb-8fa9-1987b61e0380.png)
        ![image](https://user-images.githubusercontent.com/71132893/104157270-2de2d000-542e-11eb-9222-931ccfc995a3.png)

- REST API란?
    - **API(Application Programming Interface)**: <u>프로그램이 상호작용하기 위한 인터페이스</u>를 의미한다.
    - **REST API**: <u>REST 아키텍처를 따르는 API</u>를 의미한다.
    - **REST API 호출**: <u>REST 방식을 따르고 있는 서버에 특정한 요청을 전송</u>하는 것을 의미한다.

### JSON
- **JSON(JavaScript Object Notation)**: 데이터를 주고받는 데 사용하는 경량의 데이터 형식
- JSON 형식을 따르는 데이터 예시는 다음과 같다.
>{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"id": "gildong123",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"password": "1!2@3#4$",<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"age": 30,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;"hobby": ["football","programming"]<br>
}
- JSON 데이터는 **키와 값의 쌍**으로 이루어진 데이터 객체를 저장한다.
- JSON 객체 사용 예제

```python
import json

#사전 자료형(dict) 데이터 선언
user={
    "id": "gildong123",
    "password": "1!2@3#4$",
    "age": 30,
    "hobby": ["football","programming"]
}

#파이썬 변수를 JSON 객체로 변환
json_data = json.dumps(user, indent = 4)
print(json_data)

#실행 결과
# {
#     "id": "gildong123",
#     "password": "1!2@3#4$",
#     "age": 30,
#     "hobby": [
#         "football"
#         ,"programming"
#         ]
# }
```

-JSON 객체 파일 저장 예제

```python
import json

#사전 자료형(dict) 데이터 선언
user={
    "id": "gildong123",
    "password": "1!2@3#4$",
    "age": 30,
    "hobby": ["football","programming"]
}

#JSON 데이터를 변환하여 파일로 저장
with open("user.json", "w", encoding="utf-8") as file:
    json_data = json.dump(user, file, indent=4)

```

- REST API 연습용 서비스
    - **목킹(Mocking)**이란 어떠한 기능이 있는 것처럼 흉내내어 구현한 것을 의미한다.
    - 가상의 REST API 제공 서비스: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

- REST API 호출 실습해보기
    - API 호출 경로 :[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)
    - HTTP 메서드: GET
    ![image](https://user-images.githubusercontent.com/71132893/104158140-14db1e80-5430-11eb-91ee-c35d76ae7498.png)
![image](https://user-images.githubusercontent.com/71132893/104158196-34724700-5430-11eb-8968-5420c6ff7ef1.png)

    - API 호출 경로:[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
    - HTTP 메서드: GET
    ![image](https://user-images.githubusercontent.com/71132893/104158310-6388b880-5430-11eb-92d5-6efe881828eb.png)
![image](https://user-images.githubusercontent.com/71132893/104158323-684d6c80-5430-11eb-860d-397829894be5.png)

- REST API를 호출하여 회원 정보를 처리하는 예제

```python
import requests

# REST API 경로에 접속하여 응답(Response) 데이터 받아오기
target = "https://jsonplaceholder.typicode.com/users"
response = requests.get(url=target)

#응답(Response) 데이터가 JSON 형식이므로 바로 파이썬 객체로 변환
data = response.json()

#모든 사용자(user)정보를 확인하며 이름 정보만 삽임
name_list=[]
for user in data:
    name_list.append(user['name'])

print(name_list)
```