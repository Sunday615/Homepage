<template>
    <div class="containerhomepage2">
        <div class="cardview">
            <img src="../../assets/Homepage/newmission-2.png" alt=""></img>
        </div>
        <div class="titlecontainer">
            <div class="header">
                <h1>ວິໄສທັດຂອງພວກເຮົາ</h1>
            </div>
            <div class="boxinfo" style="margin-top: 50px;">
                <div class="number">
                    <p>01</p>
                </div>
                <div class="infovision">
                    <h2>ວິໄສທັດ</h2>
                    <p>ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການ<br>ຊໍາລະ ທັງພາຍໃນ ແລະ
                        ສາກົນ,
                        ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ,<br> ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ
                        ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການ<br>ຊໍາລະໃນ ສປປ ລາວ.</p>
                </div>
            </div>
            <div class="boxinfo">
                <div class="number">
                    <p>02</p>
                </div>
                <div class="infovision">
                    <h2>ພາລະກິດ</h2>
                    <p>ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງ<br>ການຊໍາລະທີ່ເກີດຂື້ນ,
                        ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ<br> Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ
                        ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້<br>ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ,
                        ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍ<br>ລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວ<br>ລະບົບ,
                        ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ
                        ປະໂຫຍກ<br>ຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້
                        ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະ<br>ບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ
                        ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.</p>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.infovision p {
    font-size: 19px;
    font-family: "Noto Sans Lao", sans-serif;
    padding-top: 20px;
    line-height: 1.7;

}

.infovision h2 {
    font-size: 29px;
    color: #00089b;
    font-weight: bold;
    font-family: "Noto Sans Lao", sans-serif;
}

.number p {
    width: 100%;
    height: 100%;
    background: #0432C6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Inter";
    font-weight: bold;
    font-size: 20px;
    background: linear-gradient(153deg, rgba(4, 50, 198, 1) 0%, rgba(2, 24, 96, 1) 100%);
}

.header h1 {
    font-size: 70px;
    font-weight: bold;
    font-family: "Noto Sans Lao", sans-serif;
    color: #000CF0;
    background-image: linear-gradient(45deg, #000CF0, #0055E8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.infovision {
    width: 720px;
    height: 300px;
    margin-left: 30px;
    border: 1px solid green;
}

.number {
    width: 80px;
    height: 80px;


}

.boxinfo {
    width: 800px;
    height: 300px;
    display: flex;
    border: 1px solid blue;
}

.header {
    width: 800px;
    height: 100px;

}

.cardview img {
    width: 700px;
    height: 700px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.titlecontainer {
    width: 50%;
    height: 100%;
    margin-left: 3rem;
    margin-top: 50px;

}

.cardview {
    width: 45%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    border: 1px solid red;

}

.containerhomepage2 {
    width: 100%;
    height: 900px;
    display: flex;
    border: 1px solid red;
}
</style>
