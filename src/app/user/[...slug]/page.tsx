import { Components } from "@/lib";

const post = [
  {
    _id: "0e335f4ac8b8ca91",
    title:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    slug: "lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit",
    postedAt: "2023-09-08T04:52:39.184Z",
    createdAt: "2023-09-08T04:52:39.184Z",
    thumbnail: "https://placehold.jp/1280x720.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    htmlBody:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque. Id consectetur purus ut faucibus pulvinar elementum integer. Et tortor at risus viverra. Massa enim nec dui nunc. At tempor commodo ullamcorper a lacus vestibulum. Fusce id velit ut tortor pretium viverra suspendisse. Nisi est sit amet facilisis magna etiam tempor. Ornare massa eget egestas purus viverra accumsan in nisl. A diam maecenas sed enim ut sem viverra aliquet eget. Auctor elit sed vulputate mi sit amet mauris. Nunc non blandit massa enim nec dui nunc mattis. Amet nisl suscipit adipiscing bibendum est ultricies. Lacus viverra vitae congue eu consequat ac felis donec. Purus in mollis nunc sed. Egestas maecenas pharetra convallis posuere morbi leo.</p><p>Viverra adipiscing at in tellus. Maecenas accumsan lacus vel facilisis volutpat est velit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Urna porttitor rhoncus dolor purus non enim praesent elementum. Nunc congue nisi vitae suscipit tellus. Erat velit scelerisque in dictum non consectetur a erat nam. Ornare arcu odio ut sem nulla pharetra. Eget nunc scelerisque viverra mauris in. Ridiculus mus mauris vitae ultricies leo. Porttitor leo a diam sollicitudin tempor id eu. Non sodales neque sodales ut. At risus viverra adipiscing at in. Rhoncus mattis rhoncus urna neque. At imperdiet dui accumsan sit amet nulla facilisi morbi. Eu mi bibendum neque egestas. Aliquet bibendum enim facilisis gravida neque convallis a cras. Morbi leo urna molestie at.</p><p>At erat pellentesque adipiscing commodo elit at. Leo vel fringilla est ullamcorper eget nulla facilisi. Morbi leo urna molestie at elementum. Id consectetur purus ut faucibus pulvinar elementum integer enim. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Mauris pharetra et ultrices neque ornare aenean euismod. Lectus urna duis convallis convallis tellus. At tempor commodo ullamcorper a lacus vestibulum sed. Bibendum at varius vel pharetra vel turpis. Ultrices gravida dictum fusce ut. Lobortis mattis aliquam faucibus purus in massa.</p>",
    user: {
      _id: "d862678187ac3cac",
      avatarUrl: "https://placehold.jp/32x32.png",
      displayName: "Vipin Lahoti",
      email: "hi@vipinlahoti.com",
      slug: "vipinlahoti",
      username: "vipinlahoti",
    },
    categories: [
      {
        _id: "3d32a768adbceb2c",
        name: "AI",
        slug: "ai",
      },
    ],
  },
];

const user = {
  _id: "d862678187ac3cac",
  avatarUrl: "https://placehold.jp/200x200.png",
  displayName: "Vipin Lahoti",
  email: "hi@vipinlahoti.com",
  slug: "vipinlahoti",
  username: "vipinlahoti",
};

export default function User() {
  return (
    <Components.Layout>
      <Components.Row spacing="medium">
        <div className="w-7/12 m-auto text-center">
          <Components.Avatar user={user} size="xlarge" className="mb-4" />
          <Components.Text variant="h1">{user.displayName}</Components.Text>
        </div>
        <Components.Row column={3} spacing="medium">
          {post &&
            post.map((item) => <Components.Card key={item._id} {...item} />)}
        </Components.Row>
      </Components.Row>
    </Components.Layout>
  );
}
