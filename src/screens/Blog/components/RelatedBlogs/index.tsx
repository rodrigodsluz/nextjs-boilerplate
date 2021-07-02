import {
  RelatedBlogsContainer,
  RelatedBlogsTitle,
  RelatedBlogsWrapper,
} from './styles';
import RelatedBlogCard from '../RelatedBlogsCard';

const RelatedBlogs = ({ relatedBlogs }) => (
  <>
    {relatedBlogs.length && (
      <RelatedBlogsContainer>
        <RelatedBlogsTitle>Related Blogs</RelatedBlogsTitle>

        <RelatedBlogsWrapper>
          {relatedBlogs.map((blog) => (
            <RelatedBlogCard key={blog._id} blog={blog} />
          ))}
        </RelatedBlogsWrapper>
      </RelatedBlogsContainer>
    )}
  </>
);

export default RelatedBlogs;
