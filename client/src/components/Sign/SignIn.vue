<script>
    import SvgIcon from '../SvgIcon.vue';
    import ProfileItem from './ProfileItem.vue';
    import userFactory from '../../controllers/userFactory';

    export default {
        data(){
            return {
                users: [],
                usersToDelete: []
            }
        },
        components:{
            ProfileItem,
            SvgIcon
        },
        methods: {
            async selectUser(user){
                await userFactory.saveUsers({ users: this.users, usersToDelete: this.usersToDelete });
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ name: 'home' })
            },
            addUser(){
                this.users.push({
                    name: '',
                })
            },
            deleteUser(user){
                this.usersToDelete.push(user);
                this.users = this.users.filter(us => us !== user);
            }
        },
        async mounted(){
            this.users = await userFactory.getUsers();
        }
    }
</script>

<template>
    <div class="signin">
        <div class="signin-title">
            <h1>Profils</h1>
        </div>
        <div class="profiles">
            <ProfileItem v-for="user in users" :key="user.id" :user="user" @click="selectUser(user)" :deleteUser="deleteUser"/>
            <div class="add-profile" @click="addUser">
                <SvgIcon name="Add" class="add-profile-icon"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .signin{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: -200px;
    }
    .signin-title{
        font-size: 32px;
        margin: 50px;
        color: #14213D;
    }
    .signin-title h1{
        font-weight: bold;
    }
    .profiles{
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .add-profile{
        margin: 0 20px;
        padding: 0 10px;
        height: 80%;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .add-profile-icon{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #FFF;
    }
</style>