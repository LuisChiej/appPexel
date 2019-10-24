document.addEventListener('DOMContentLoaded', ()=>{
    
    const vm = new Vue({
        el:'#app',
        data: {
            searchQuery: "",
        },

        methods: {
            search(e) {
                e.preventDefault();
                if(this.searchQuery !== ''){
                    location.href = `/results/${this.searchQuery}/1`;
                } else {
                    alert('Hello');
                }
            }
        }

    });
});
