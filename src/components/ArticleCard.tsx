import type { Component } from 'solid-js';
import type { CollectionEntry } from 'astro:content';

interface ArticleCardProps {
  article: CollectionEntry<'articles'>;
}

const ArticleCard: Component<ArticleCardProps> = (props) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article class="card">
      <div class="card-image">
        Article Image Placeholder
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>{formatDate(props.article.data.publishedAt)}</span>
          <span>•</span>
          <span>{props.article.data.readingTime}</span>
        </div>
        <h3 class="card-title">
          <a href={`/articles/${props.article.slug}`}>
            {props.article.data.title}
          </a>
        </h3>
        <p class="card-excerpt">
          {props.article.data.description}
        </p>
        {props.article.data.tags && (
          <div class="card-tags">
            {props.article.data.tags.map((tag) => (
              <span class="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;