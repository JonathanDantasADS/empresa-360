<template>
    <div>
        <h5>Componente Indicadores</h5>
        <p>Poderiamos recuperar os indicadores do Serviço ID {{id}}</p>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'Indicadores',
    mixins: [ApiMixin],
    props: ['id'],
    created() {
        console.log('Indicadores', this.id)
    }
}
</script>