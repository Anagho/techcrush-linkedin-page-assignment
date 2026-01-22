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
        userName="John Doe"
        userTitle="Mobile Developer"
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
        userName="Mary Adams"
        userTitle="UI/UX, Project Manager"
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
        // postImage={
        //   "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        // }
      />
      <PostCard
        userName="James Bone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="1d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        // postImage={
        //   "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        // }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        // postImage={
        //   "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        // }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        postImage={
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        }
      />
      <PostCard
        userName="Sarah Stone"
        userTitle="Mobile Developer"
        userImage={"https://i.pravatar.cc/300"}
        timestamp="3d"
        postText="Hi, I am currently learning React Native with Expo. I'm building reusable components which is fun and powerful"
        // postImage={
        //   "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
        // }
      />
    </ScrollView>
  );
}
