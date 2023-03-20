export default function phoneLogic() {
    const phone = "41992380193";
    window.open(`https://api.whatsapp.com/send?phone=${phone}`, "_blank");
}
