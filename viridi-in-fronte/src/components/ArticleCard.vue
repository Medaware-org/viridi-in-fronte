<script setup>
    //maybe replace the slots with parameters but idk if i will do it lol
    
</script>

<template>
    <div class="card-box">
        <div class="card-head">
            <slot name="card-head" />
        </div>
        <div class="card-content">
            <b>
                <slot name="card-title" />
            </b>
            <p>
                <slot name="card-description" />
            </p>
        </div>
        <div class="card-footer">
            <p class="">
                <slot name="card-creationdate" />
            </p>
            <p class="autor">
                <div class="mr-2">
                    <slot name="card-autor" />
                </div>
                <div class="autor-img">
                    <slot name="card-autor-picture"/>
                </div>
            </p>
        </div>
    </div>
</template>

<style lang="css">
    .card-box {
        margin: 2rem 3rem;
        height: 400px;
        min-width: 270px;
        max-width: 270px;
        border-radius: 20px;
        box-shadow: 2px 0px 10px grey;
        float: none;
        display: inline-block;
        text-wrap: wrap;
        position: relative;
    }

    .card-head {
        height: 50%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        img {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            height: 100%;
            width: 100%;
        }

        background-color: var(--color-header-1);
    }

    .card-content {
        padding: 10px 15px;
        display: flex;
        flex-direction: column;

        width: 100%;

        b {
            font-weight: 600;
            width: 90%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            font-weight: 300;
            width: 90%;
            max-height: 100px;
            overflow: hidden;
        }
    }

    .card-footer {
        padding: 10px 15px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        place-items: center;
        font-weight: 100;
        font-size: small;
        position: absolute;
        bottom: 0;
    }

    .autor {
        display: flex;
        justify-items: center;
        place-items: center;
    }

    .autor-img {
        background-color: var(--color-header-2);
        width: 40px;
        height: 40px;
        border-radius: 40px;
        place-items: center;

        img {
            width: 100%;
            height: 100%;
            border-radius: 40px;
        }
    }
</style>
