# Git
## Clone
Lấy dự án đã có sẵn (remote) về máy tính của mình (local)

Câu lệnh clone: git clone <url> (url có thể là sshkey hoặc https)

Sau khi clone về thì sẽ thiếu file node_modules, gõ lệnh: npm install để add file node_modules thì sẽ chạy code như bình thường

## Branch
Chia nhánh giúp việc code trở nên thuận tiện hơn, không ảnh hưởng tới code và vùng làm việc của những người khác trong team

- git branch <branch_name> : tạo branch mới - ít dùng
- git checkout <branch_name> : dùng để chuyển tới branch - hay dùng
- git checkout -b <branch_name> : dùng để tạo và chuyển tới branch - hay dùng

## Push
Đẩy code từ Repo local lên remote Repo

Câu lệnh: git push <remote_name><branch_name>

## Pull
Lấy dữ liệu mới update của repo về
- pull: chỉ lấy dữ liệu có thay đổi của nhánh đó về máy
- clone: lấy cả repo về

ex: git pull origin main

A: branchA

B: branchB

=> git pull origin branchA

Câu lệnh: git pull <remote_name><branch_name>

## Stashing
- Stash: Lưu các công việc đang làm lại vào 1 vùng nhớ "tạm" - Câu lệnh : git stash
- Unstash: Lấy các công việc trong vùng nhớ tạm ra - Câu lệnh : git stash pop
- Liệt kê danh sách stash đã lưu - Câu lệnh : git stash list
- Lưu ý: câu lệnh stash trên chỉ dùng cho các file đã được lên vùng repo
- Để lưu các file mới tạo chưa được đẩy lên vùng repo thì dùng - Câu lệnh : git stash save --all

## Merge request
- Gộp code từ 1 nhánh sang nhánh còn lại 
- Được viết tắt trong môi trường làm việc bằng PR/MR

## Reviewer
- Reviewer : người review code

## Flow làm việc
1. get repo chung về local
2. tạo branch mới (trước khi switch qua branch mới phải luôn nhớ pull dữ liệu từ main để đảm bảo có đầy đủ code mới nhất của repo : git pull origin main)
3. thực hiện bài tập
4. thực hiện add file bài tập lên cái nhánh của mình (git push origin <tên_branch>) => sẽ sinh ra 1 đường dẫn
5. Nhấn vào đường dẫn sẽ hiển thị 1 cái Open a pull request
6. Nhập description
7. Ở phần Reviewers bên tay phải màn hình, thực hiện add bạn review chéo trong lớp
8. Nhấn nút Create pull request
9. Để nộp bài tập thì nộp lại url của PR
10. Đối với người review code, mở PR lên
11. Kéo xuống dòng code và review, để thêm comment thì trỏ vào dòng code và nhấn icon + để nhập bình luận
12. Sau khi comment thì nhấn nút Add single comment
13. Sau khi fix theo comment thì nhấn nút Resolve converstion, muốn biện luận lại thì reply comment
14. Sau tg làm việc và trao đổi thì Mentor/Leader thấy code đã ổn sẽ nhấn nút Merge pull request => việc này sẽ add code từ branch vào main
15. Nếu code có vấn đề thì vào PR và nhấn nút revert -> chỉnh sửa code -> creat pull request -> merge lại vào main

## Convention

- Cách đặt tên branch theo cấu trúc : <type>/<short-description>
    - feat/checkout
    - fix/fill-info
    - feat/lesson-6-long
- Ý nghĩa của type :
    - feat: tính năng mới
    - fix: sửa lỗi
    - conf: thay đổi cấu hình (config)
    - chore: các thay đổi "lặt vặt" - xóa file không dùng, đổi tên file

# Javascript
- Chuyển qua code bằng typescript <tên_file>.ts
## Class
- Tái sử dụng code
- Tăng tính linh hoạt

Cú pháp tạo class - dùng lại PascalCase

class Student {

    // thuộc tính chung

    // hàm khởi tạo - constructor hàm gồm các biến thật sự cần thiết để tạo nên cái class, có thể thiếu 1 vài biến vẫn được

    // method

}


# Typescript
- TypeScript (TS) là JavaScript cải tiến, thêm kiểu dữ liệu để code rõ ràng hơn
- Giúp phát hiện lỗi ngay khi viết code (vd gán sai dữ liệu)
- TS được biên dịch thành JavaScript để chạy

let age: number = 25; // phải là số, nếu gán age = "30" sẽ báo lỗi ngay vì ko thể gán chuỗi cho số

let name: string = "Hien" // phải là chuỗi

let teams: string[] = ["Team A", "Team B"] // mảng chuỗi

### Interface trong TypeScript
- Interface định nghĩa cấu trúc cho đối tượng (như cầu thủ trong đội bóng)
- Đảm bảo đối tượng có đúng các thuộc tính và kiểu dữ liệu

### Class trong TypeScript
- Giống JavaScript nhưng có thêm khai báo kiểu dữ liệu cho thuộc tính và phương thức
