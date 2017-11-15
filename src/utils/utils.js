import Vue from 'vue'

export default {
    install(Vue){
        Vue.prototype.showToast = (_this,text,status) => {
            _this.$store.dispatch("showToast",{
                text:text,
                show:status
            });
            setTimeout(()=>{
                _this.$store.dispatch("showToast",{
                    show:false
                });      
            },1500);
        }

    }
}