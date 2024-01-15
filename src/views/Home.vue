<template>
    <v-container>
        <v-row>
            <!-- Use v-for to iterate over an array and create 10 cards -->
            <v-col v-for="(card, index) in cards" :key="index" cols="12" md="3">
                <v-card hover color="blue-grey-darken-2" class="rounded-lg">
                    <v-card-title>Card {{ index + 1 }}</v-card-title>
                    <v-card-subtitle>Subtitle</v-card-subtitle>
                    <v-card-text>
                        This is the content of card {{ index + 1 }}.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="elevated" class="bg-purple-lighten-1">Button</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref } from "vue"


const cards = ref(Array.from({ length: 10 }, (_, index) => ({ id: index })));
</script>