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

        <div class="col-md-6">
            <figure> 
                <img src="@/assets/image4.jpg" 
                alt="">
                <figcaption>Lorem, ipsum dolor.</figcaption>
            </figure>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
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
        height: 60vh;
        overflow-y: auto;
        margin: auto;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-top: 30px;
    }

    figure img {
        width: 150px;
        margin-right: 20px;
    }

    figure {
        float: left;
    }
</style>