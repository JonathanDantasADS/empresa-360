<template>
    <div>
        <h5>Componente Opções</h5>
        <p>Poderiamos recuperar as opcões do Serviço ID {{id}}</p>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'Opcoes',
    mixins: [ApiMixin],
    props: ['id'],
    created() {
        // 
    },
    beforeRouteUpdate() {
        console.log('Guarda de componente beforeRouteUpdate')
    }
}
</script>