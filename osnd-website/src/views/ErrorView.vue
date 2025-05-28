<template>
    <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div class="button-container">
            <button class="return-button" @click="$router.push('/')">Return to Home</button>
        </div>
    </div>
</template>

<style scoped>
.button-container {
    display: flex;
    justify-content: center;
}

.return-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>