# Todo list dùng useReducer

Đồ án này được làm hoàn toàn bằng useReducer

## Ưu điểm

- Gọn hơn useState và không render lại nhiều như useState
- Mỗi phương thức được chia ra cụ thể theo từng action

## Nhược điểm

- Rất rắc rối khi mới tiếp cận
- Chỉ dành cho những xử lí phức tạp

### Công thức useState

`const [state, dispatch] = useReducer(reducer, initState)`

- initialState là giá trị khởi tạo và được viết dưới dạng object
- state: sẽ luôn lấy giá trị khởi tạo khi mới chạy lần đầu
- reducer: mang 2 giá trị là state và action
- action: mang 2 giá trị là type và payload => payload là value được truyền khi dispatch khởi chạy
=> reducer sẽ dựa vào type để sử lí bên trong
- dispatch: dùng để khởi động reducer

## Sơ đồ vòng đời của useReducer
![image](https://user-images.githubusercontent.com/114068860/211465546-7984b301-dcf4-4460-bfff-65d2f09d4bf9.png)
