# Todo list dùng useState

Đồ án này được làm hoàn toàn bằng useState

## Ưu điểm

Gọn hơn code thuần JavaScript

## Nhược điểm

- Re-render lại giao diện rất nhiều
  => Chưa tối ưu được khuyết điểm này

### Công thức useState

`const [state, setState] = useState(initial value)`

- initial value là giá trị khởi tạo, có thể là: number,string, object,array,true,false,....
- state: sẽ luôn lấy giá trị khởi tạo khi mới chạy lần đầu
- setState: dùng để cập nhật lại state mỗi lần re-render
