import { useState } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {

    const profilePhotos = [
        'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg'
    ]
    const [actualPhoto, setActualPhoto] = useState(profilePhotos[0]);
    const name = 'Agata';
    const age = 22;

    function handleNextPhoto(i: number){
        setActualPhoto(profilePhotos[i+1])
    }

    return(
        <View className="flex-1 items-center justify-center">
            <View className="min-w-full items-center">
                <Image 
                    className="rounded-3xl h-full min-w-full"
                    source={{uri:actualPhoto}}
                />
                <View className="bg-black/50 w-full rounded-b-3xl absolute bottom-0 py-3 px-4">
                    <Text className="text-white font-bold text-4xl pb-2">{name} <Text className="font-normal">{age}</Text></Text>
                    <Text className="text-white">A 2.5km perto de você</Text>
                </View>
            </View>
        </View>
    )
}