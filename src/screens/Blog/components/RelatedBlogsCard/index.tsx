import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import 'moment/locale/pt-br';
import { API } from 'config';
import {
  RelatedBlogsCardContainer,
  RelatedBlogsCardImg,
  RelatedBlogsCardWrapper,
  RelatedBlogsCardTitle,
  RelatedBlogsCardPostedBy,
  LinkBlogTitle,
  RelatedBlogsCardExcerpt,
} from './styles';

const RelatedBlogCard = ({ blog }) => (
  <RelatedBlogsCardContainer>
    <Link href={`/blogs/${blog.slug}`}>
      <a>
        <RelatedBlogsCardImg
          src={`${API}/blog/photo/${blog.slug}`}
          alt={blog.title}
        />{' '}
      </a>
    </Link>
    <RelatedBlogsCardWrapper>
      <Link href={`/blogs/${blog.slug}`}>
        <RelatedBlogsCardTitle>{blog.title}</RelatedBlogsCardTitle>
      </Link>
      {/* <RelatedBlogsCardExcerpt>
        {renderHTML(blog.excerpt)}
      </RelatedBlogsCardExcerpt> */}
      <RelatedBlogsCardPostedBy>
        Criado por{' '}
        <Link href={`/profile/${blog.postedBy.username}`}>
          <LinkBlogTitle>
            <span>{blog.postedBy.name}</span>
          </LinkBlogTitle>
        </Link>{' '}
        {moment(blog.updatedAt).fromNow()}
      </RelatedBlogsCardPostedBy>
    </RelatedBlogsCardWrapper>
  </RelatedBlogsCardContainer>
);

export default RelatedBlogCard;
