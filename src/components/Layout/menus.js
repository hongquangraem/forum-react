import { ReactComponent as HeadphonesIcon } from '../../assets/icon/headphones.svg'
import { ReactComponent as DiscussionIcon } from '../../assets/icon/conversation.svg'
import { ReactComponent as BloggingIcon } from '../../assets/icon/blog.svg'
import { ReactComponent as ReviewIcon } from '../../assets/icon/review.svg'
import { ReactComponent as MovieReviewIcon } from '../../assets/icon/moviereview.svg'
import { ReactComponent as FoodReviewIcon } from '../../assets/icon/foodreview.svg'
import { ReactComponent as BookReviewIcon } from '../../assets/icon/bookreview.svg'

export default [
  {
    key: 'discussion',
    name: 'Discussion',
    type: 'menuItem',
    IconComponent: DiscussionIcon,
  },
  {
    key: 'blog',
    name: 'Blog',
    type: 'menuItem',
    IconComponent: BloggingIcon,
  },
  {
    key: 'review',
    name: 'Review',
    type: 'subMenu',
    IconComponent: ReviewIcon,
    menuItems: [
      {
        key: 'book-review',
        name: 'Book',
        type: 'menuItem',
        IconComponent: BookReviewIcon,
      },
      {
        key: 'food-review',
        name: 'Food',
        type: 'menuItem',
        IconComponent: FoodReviewIcon,
      },
      {
        key: 'movie-review',
        name: 'Movie',
        type: 'menuItem',
        IconComponent: MovieReviewIcon,
      },
    ],
  },
  {
    key: 'audio',
    name: 'Audio',
    type: 'menuItem',
    IconComponent: HeadphonesIcon,
  },
]
