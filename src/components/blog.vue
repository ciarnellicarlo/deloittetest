<template>
    <article class="container row">
        <header class ="col-md-12">
            <h1>Title</h1>
            <p class="date">Date</p>
        </header>

        <p class="col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, adipisci nesciunt voluptates ad corrupti in recusandae harum! Asperiores ullam amet,
            facilis placeat repellat provident est illum quisquam debitis nobis consectetur.
        </p>

        <p class="col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, adipisci nesciunt voluptates ad corrupti in recusandae harum! Asperiores ullam amet,
            facilis placeat repellat provident est illum quisquam debitis nobis consectetur.
        </p>

        <div class="col-md-6 row">
            <figure class="col-md-6 row"> 
                <img class="col-md-12" src="@/assets/slider1.jpg" 
                alt="">
                <figcaption class="col-md-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</figcaption>
            </figure>
            <p class="col-md-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, adipisci nesciunt voluptates ad corrupti in recusandae harum! Asperiores ullam amet,
            facilis placeat repellat provident est illum quisquam debitis nobis consectetur.</p>
        </div>

        <p class="col-md-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi, adipisci nesciunt voluptates ad corrupti in recusandae harum! Asperiores ullam amet,
            facilis placeat repellat provident est illum quisquam debitis nobis consectetur.
        </p>
    </article>
</template>

<script>
export default {
    name: 'blog',
};
</script>

<style scoped lang="scss">
    article {
        margin-top: 30px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    figure img {
    }
</style>