import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  BlogArticleContainer,
  BlogBanner,
  BlogWrapper,
  BlogContent,
  BlogTitle,
  BlogWrittenBy,
  BlogCategoriesTags,
  LinkCategory,
  LinkTag,
  BlogText,
  BlogSidebar,
  BlogSidebarCategories,
  LinkSidebarCategory,
  LinkBlogTitle,
} from './styles';
import { API } from '../../../config';

const BlogScreen = ({ blog, categories }) => (
  <BlogArticleContainer>
    <figure>
      <BlogBanner src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} />
    </figure>

    <BlogWrapper>
      <BlogContent>
        <section>
          <BlogTitle>{blog.title}</BlogTitle>
          <BlogWrittenBy>
            Criado por{' '}
            <Link href={`/profile/${blog.postedBy.username}`}>
              <LinkBlogTitle>
                <span>{blog.postedBy.name}</span>
              </LinkBlogTitle>
            </Link>{' '}
            {moment(blog.updatedAt).fromNow()}
          </BlogWrittenBy>
        </section>
        <BlogCategoriesTags>
          {blog.categories.map((category) => (
            <Link key={category._id} href={`/categories/${category.slug}`}>
              <LinkCategory>{category.name}</LinkCategory>
            </Link>
          ))}

          {blog.tags.map((tag) => (
            <Link key={tag._id} href={`/tags/${tag.slug}`}>
              <LinkTag>{tag.name}</LinkTag>
            </Link>
          ))}
          <br />
        </BlogCategoriesTags>
        <section>
          <BlogText>{renderHTML(blog.body)}</BlogText>
        </section>
      </BlogContent>
      {/* <BlogSidebar>
        <BlogSidebarCategories>
          {categories.map((category) => (
            <Link key={category._id} href={`/categories/${category.slug}`}>
              <LinkSidebarCategory>{category.name}</LinkSidebarCategory>
            </Link>
          ))}
        </BlogSidebarCategories>
      </BlogSidebar> */}
    </BlogWrapper>
  </BlogArticleContainer>
);

export default BlogScreen;
