import PostCard from "@/components/PostCard";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ScrollView
      style={{
        padding: 1,
      }}
    >
      <PostCard
        userName="Ade Olasukanmi"
        userTitle="Mobile Developer | React Native Enthusiast"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="2d"
        postText="I am currently learning React Native with Expo and focusing on building reusable components, improving UI consistency, and understanding state management better. It’s challenging but very rewarding.
"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
        following={true}
        feedback={{
          likes: 12,
          loved: 4,
          impressions: 3,
          comments: 6,
          repost: 1,
        }}
      />
      <PostCard
        userName="Mary Setemi"
        userTitle="UI/UX, Project Manager, Tech Enthusiast, Blogger"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3w"
        postText="Today I learned that images in React Native must always have width and height defined, otherwise they won’t render at all. Small details like this make a big difference when building real apps.
"
        feedback={{
          likes: 1,
          loved: 4,
          impressions: 3,
          comments: 6,
          repost: 1,
        }}

      />
      <PostCard
        userName="Asegun Olalekan"
        userTitle="Frontend Developer | Tech Blogger"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="1d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Obinna Chukwuma"
        userTitle="Backend Developer | Cloud Specialist"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Uche Nwosu"
        userTitle="Fullstack Developer | Tech Enthusiast"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Emmanuel Shetima"
        userTitle="Web Developer | Open Source Contributor"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Dianna Praise"
        userTitle="Frontend Developer | UI/UX Designer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
      />
      <PostCard
        userName="Daniel Kingsley"
        userTitle="Software Engineer | Tech Blogger"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
    
      />
      <PostCard
        userName="Peter Bosun"
        userTitle="DevOps Engineer | Cloud Enthusiast"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Faith Oladipo"
        userTitle="Mobile Developer | React Native Enthusiast"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
     
      />
    </ScrollView>
  );
}
