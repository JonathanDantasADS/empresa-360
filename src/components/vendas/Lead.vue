<template>
    <div>
        <h5>Detalhes : {{ dados.nome }}</h5>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
         </div>
        
        <div class="mb-3 row">    
            <label class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone">
            </div>
        </div>

        <div class="col-md-3 ms-auto align-items-center">
            <button type="button" class="btn btn-warning" style="margin: 10px" @click="$router.push({name: 'leads'})">Voltar</button>
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixin'

    export default {
        name: 'Lead',
        props: ['id'],
        mixins: [ApiMixin],
        created() {
            this.getDadosApi(`http://localhost:3000/leads/${this.id}`)
        },
        beforeRouteLeave(){
            const confirmar = window.confirm('Deseja sair deste formulário?')

            if(confirmar) {
                return true
            } else {
                return false
            }
        },

    }
</script>