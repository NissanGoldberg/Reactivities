import {RootStore} from './rootStore';
import {observable, action, runInAction, computed, reaction} from 'mobx';
import { IProfile, IPhoto } from '../models/profile';
import agent from '../api/agent';
import { toast } from 'react-toastify';

export default class ProfileStore {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        reaction(
            () => this.activeTab,
            activeTab => {
                if (activeTab === 3 || activeTab === 4) {
                    const predicate = activeTab === 3 ? 'followers' : 'following';
                    this.loadFollowings(predicate)
                } else {
                    this.followings = [];
                }
            }
        )
    }

    @observable profile: IProfile | null = null;
    @observable loadingProfile = true;
    @observable loading = false;
    @observable followings: IProfile[] = [];
    @observable activeTab: number = 0;

    @computed get isCurrentUser() {
        if (this.rootStore.userStore.user && this.profile) {
            return this.rootStore.userStore.user.username === this.profile.username
        } else {
            return false;
        }
    }

    @action setActiveTab = (activeIndex: number) => {
        this.activeTab = activeIndex;
    }

    @action loadProfile = async (username: string) => {
        this.loadingProfile = true;
        try {
            const profile = await agent.Profiles.get(username);
            runInAction(() => {
                this.profile = profile;
                this.loadingProfile = false;
            })
        } catch (error) {
            runInAction(() => {
                this.loadingProfile = false;
            })
            console.log(error)
        }
    }

    //TODO
    
    // @action uploadPhoto = async (file: Blob) => {
    // }

    // @action setMainPhoto = async (photo: IPhoto) => {
    // }
    //
    // @action deletePhoto = async (photo: IPhoto) => {
    // }

    @action follow = async (username: string) => {
        this.loading = true;
        try {
            await agent.Profiles.follow(username);
            runInAction(() => {
                this.profile!.following = true;
                this.profile!.followersCount++;
                this.loading = false;
            });
        } catch (error) {
            toast.error('Problem following user');
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    @action unfollow = async (username: string) => {
        this.loading = true;
        try {
            await agent.Profiles.unfollow(username);
            runInAction(() => {
                this.profile!.following = false;
                this.profile!.followersCount--;
                this.loading = false;
            });
        } catch (error) {
            toast.error('Problem unfollowing user');
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    @action loadFollowings = async (predicate: string) => {
        this.loading = true;
        try {
            const profiles = await agent.Profiles.listFollowings(
                this.profile!.username,
                predicate
            );
            runInAction(() => {
                this.followings = profiles;
                this.loading = false;
            })
        } catch (error) {
            toast.error('Problem loading followings');
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}