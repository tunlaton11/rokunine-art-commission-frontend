<script setup>
import { ref, shallowRef } from 'vue';
import { sidebarItems } from "@/components/layout/sidebar/SidebarItems";
import { sidebarHeader } from "@/components/layout/sidebar/SidebarHeader";
import { RouterView } from 'vue-router';


const sDrawer = ref(true)

</script>

<template>
    <v-app class="rounded rounded-md px-xl-16">

        <!-- topbar -->
        <v-navigation-drawer v-model="sDrawer" left :width="300">
            <v-list-item lines="three" :prepend-avatar="sidebarHeader.avatar" :title="sidebarHeader.title"
                :subtitle="sidebarHeader.subtitle"></v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="(item, i) in sidebarItems" :key="i" :title="item.title" :prepend-icon="item.icon"
                    :to="item.to" :value="item.title">
                </v-list-item>
            </v-list>

            <!-- footer -->
            <template v-slot:append>
                <v-divider></v-divider>
                <div class="pa-2 text-center text-caption">
                    Copyright &#169; {{ new Date().getFullYear() }} —
                    <strong>Synthesizer</strong>
                </div>
            </template>
        </v-navigation-drawer>

        <!-- sidebar -->
        <v-app-bar :elevation=3>
            <v-app-bar-title>Home</v-app-bar-title>
            <template v-slot:prepend>
                <v-app-bar-nav-icon class="hidden-lg-and-up text-muted" @click="sDrawer = !sDrawer"></v-app-bar-nav-icon>
            </template>
        </v-app-bar>

        <!-- content -->
        <v-main class="d-flex justify-center mt-5" style="min-height: 300px;">
            <RouterView />
        </v-main>
    </v-app>
</template>