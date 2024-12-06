import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type PostsTableProps = {
  limit?: number;
  title?: string;
};

const PostsTable = ({ limit, title }: PostsTableProps) => {
  // Sort posts in dec order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title ? title : 'Posts'}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of recent posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className='hidden md:table-cell'>Author</TableHead>
              <TableHead className='hidden md:table-cell text-right'>
                Date
              </TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell className='hidden md:table-cell'>
                  {post.author}
                </TableCell>
                <TableCell className='text-right hidden md:table-cell'>
                  {post.date}
                </TableCell>
                <TableCell>
                  <Link href={`/posts/edit/${post.id}`}>
                    <Button variant='default' size='sm'>
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PostsTable;
