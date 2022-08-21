<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'dashboard' }" exact-active-class="active">
                    <i class="bi bi-speedometer2"></i> Dashboard
                </router-link>
                <!-- Vendas -->
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'vendas' }" exact-active-class="active">
                    <i class="bi bi-cart"></i> Vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'leads' }" exact-active-class="active">
                    &nbsp;&nbsp;&nbsp;
                    <i class="bi bi-activity"></i> Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'contratos' }" exact-active-class="active">
                    &nbsp;&nbsp;&nbsp;
                    <i class="bi bi-file-earmark-text"></i> Contratos
                </router-link>
                <!-- END Vendas -->
                <!-- Serviços -->
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'servicos' }" exact-active-class="active">
                    <i class="bi bi-card-checklist"></i> Serviços
                </router-link>
                <!-- END Serviços -->
            </div>
            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                    <router-view></router-view>
                </div>

            </div>
        </div>

        <div class="rodape">
            <router-view name="rodape"></router-view>
        </div>
    </div>
</template>


<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}


/* .router-link-active {
    color: rgb(227, 226, 226);
    background-color: rgb(32, 116, 79);
    border-color: rgb(32, 116, 79);
}

.router-link-exact-active {
    color: rgb(0, 0, 0);
    background-color: #33c586af;
    border-color: #1bdc88f8;
} */

.rodape {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ccc;
}

</style>