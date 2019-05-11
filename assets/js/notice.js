<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script>
    /*     參數說明
     obj      : 動畫的節點，本例中是ul
     top      : 動畫的高度，本例中是-35px;注意向上滾動是負數
     time     : 動畫的速度，即完成動畫所用時間，本例中是500毫秒，即marginTop從0到-35px耗時500毫秒
     function : 回呼函數，每次動畫完成，marginTop歸零，並把此時第一條資訊添加到清單最後;
    */

    function noticeUp(obj,top,time) {
        $(obj).animate({
        marginTop: top
        }, time, function() {
        $(this).css({marginTop:"0"}).find(":first").appendTo(this);
        })
    };

    $(function() {
        // 調用 公告滾動函數
        setInterval("noticeUp('.notice ul','-500px',2000)", 2000);
    });
</script>