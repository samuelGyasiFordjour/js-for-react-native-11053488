function createUserProfiles(names, modifiedNames){
        let userProfiles = [];

        for (let i = 0; i < names.length; i++) {
            const userProfile = {
                originalName: names[i],
                modifiedName: modifiedNames[i],
                id: i + 1 
            };
        userProfiles.push(userProfile);
    }

    return userProfiles;

}