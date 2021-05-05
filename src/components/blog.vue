<template>
    <article class="container row">
        <header class ="col-md-12">
            <h1>Welcome to Deloitte!</h1>
            <p class="date">Thursday, 6th May 2021</p>
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
                <img src="@/assets/chairperson.jpg" 
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
        margin: auto;
        padding-bottom: 32px;
        line-height: 1.8rem;
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

    @media (max-width: 991.98px) {
        article {
            height: 100%;
        }
    }
</style>