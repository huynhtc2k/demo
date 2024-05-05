//if else
function neuthi(dtb){
    if(dtb==8){alert("số tám")}
    else { alert("không phải số 8")}

}
//tinh switch case
function cas(tinhcase){
    var thongbao=""
    switch (tinhcase){
        case 9:thongbao="đéo ok ";break;
        case 8:thongbao="không ok";break;
        default:thongbao="non";break;
    }alert(thongbao);
}
//for
function vonglapfor(){
    document.write("số thứ tự <br>")
    for(i=0; i<100; i++){
    document.write("số thứ tự "+ i +"<br>");
    }
}
//vong lap while
function vonglapwhile(toida){
    i=0
    while(i<toida){
        document.write("so"+i+"<br>")
        i++
    }
}
//vong lap do while
function dowhile(toida){
    i=0
    do {
        i++
        document.write("số "+i+"<br>")
    }   while (i<toida)
    }
// Change Focus/Blur//
function changecolor(choose){
    var txt= document.getElementById("doimau")
    if(choose==1){
    txt.style.border ="solid 4px red";}
    else{
    txt.style.border ="solid 1px gray";
    }
}
//onchange
function thaydoichon(){
    var theP = document.getElementById("xuat")
    var Dropdown = document.getElementById("chon")
    theP.innerHTML = Dropdown.value;
}
// onmouseover-onmouseout
function changecolorbutton(thamso){
    if(thamso==1){
        nut.style.backgroundColor="red"
    } else 
    if(thamso==2){
        nut.style.backgroundColor="white"
    }
}
//tag name
function tagname(){
    var thep=document.getElementsByTagName("p")
    alert("số thẻ "+ thep.length + " nội dung " + thep[1].innerHTML)
}
//cộng 2 phần tử
function tinhtong(){
    var soa=document.getElementById("soa")
    var sob=document.getElementById("sob")
    var kq=document.getElementById("kq")
    if(isNaN(soa.value) || isNaN(sob.value)){
    alert("nhập vào số a và b")
    return false }
    else{
        soa=parseInt (soa.value)
        sob=parseInt (sob.value)
        var tong = soa+sob;
        kq.value=tong
        return true
    }
}
/*tạo table động*/
function tabledong(){//khai báo biến
    var sodong=document.getElementById("sodong")
    var socot=document.getElementById("socot")
    if(isNaN(sodong.value) || isNaN(socot.value)){
        alert("nhập số a và b")
        return false
    }else{//tạo một thẻ div để chứa
        var divid=document.getElementById("container")
        //số dòng, số cột người dùng được nhập
        var sodong= parseInt (sodong.value)
        var socot = parseInt (socot.value)
    //tạo thẻ table
    var createtable = document.createElement("table");
    createtable.style.border="1px solid black"
    //tạo tr +vòng lặp
    for (let i=0;i<sodong;i++){
    var taotr =document.createElement("tr")
    createtable.appendChild(taotr)
    //tạo td+vòng lặp
    for (let j=0;j<socot;j++){
    var taotd=document.createElement("td")
    taotd.style.border="1px solid black"
    //tạo txtnode
    var txtnode=document.createTextNode(i+j)
    taotd.appendChild(txtnode)
    taotr.appendChild(taotd)
    }
}     //div chứa table
      divid.appendChild(createtable)
      return true
}
}
//date (năm tháng ngày giờ phút giây)
var now= new Date()
//alert("ngày hôm nay "+now)
//alert("ngày mai "+ new Date(now.getFullYear(),now.getMonth(),now.getDate()+1))
//alert("ngày mốt "+ new Date(now.getFullYear()+now.getMonth(),now.getDate()+2))
var ngayphunu=new Date(2024,9,20)
//alert("ngày phụ nữ "+ngayphunu)

//tìm chuỗi trong string (indexof) nằm đầu
var chuoi="xin chào bạn đã đến với tôi..."
document.write("vị trí chuỗi tại: <b>"+ chuoi.indexOf("chào")+"</b><br>")
//nằm cuối
var chuoi2 = "xin chào các bạn mình là Huỳnh"
document.write("vị trí thứ :<b>" + chuoi2.lastIndexOf("chào")+"</b><br>")
//dùng search
var chuoi3 = "xin chào các bạn mình là Huỳnh"
document.write("vị trí thứ :<b>" + chuoi2.search("chào")+"</b><br>")
//tìm kiếm và thay thế
//replace (str_find,str_place)
var chuoi4 = "nơi này có anh"
document.write(chuoi4.replace("có anh", "mãi vui"))
// hộp thoại cảnh báo dữ liệu confirm
function xacnhan(){
var canhbao=confirm("bạn có ok không?")
    if(canhbao){
        document.write("rất là ok luôn")
    }else{
        document.write("phải ok")
    }
}
//prompt
function nhaplieu(){
    var canhbao= prompt("nhập vào đây")
     document.write(canhbao)
}
//yêu cầu nhập liệu
function kiemtranhap(){
    var nhap=document.form1.abcc
    var giatri= nhap.value
    var divnhap = document.getElementById("yeucaunhap")
    if (giatri==""){
  
    divnhap.innerHTML ="bạn chưa nhập"
    divnhap.style.color = "red"
        return false
    }else {

    return true
    }
}
// kiểm tra ký tự nhập liệu bằng chữ/ số
function kiem(kitu){
    var letters=/^[A-Za-z]+$// /^[0-9]+$/
    var loikitu=document.getElementById("kiemtrakitunhaplieu")
    if(kitu.value.match(letters)){
        loikitu.style.display="none"
    }else{       
        loikitu.style.display = "block"
        loikitu.innerHTML ="bạn không được nhập ký tự"
        loikytu.style.color = "red"
        return false
    }
    return true
}
//jquery hide/show/toggle 
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").toggle("fast")
    })
    $("#btn2").click(function(){
        $("p").show("fast")
    })
   // $("#btn1").click(function(){
     //   $("p").hide("fast")
 //   })
})
//fadein/out/toggle/to in=hiện box, out= xóa box, toggle=ẩn/hiện, to=chỉnh trong suốt
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#div1").fadeOut()
    })
})
//slideup/down/toggle
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").slidetoggle()
    })
    $("#btn1").click(function(){
        $("p").animate({
            left: '100px',
            height:'10px',
            width:'50px',
        })
    })
})
//kết hợp chuỗi
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").slidetoggle()
    })
    $("#btn1").click(function(){
        $("p").animate({
            left: '100px',
            height:'10px',
            width:'50px',
        }).sdiletoggle()
    })
})