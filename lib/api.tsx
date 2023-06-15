import { useState, useEffect } from 'react';
import { CourseData, RegionData, MenuData } from '../types/index'; // Import the CourseData type from your types file
import { useQuery } from 'react-query';

export function useFetchPosts(taxonomyId?: string, currentSlug?: string): CourseData[] {
  const fetchPosts = async () => {
    let url = process.env.SITE_URL + '/wp-json/wp/v2/directory?_embed';

    if (taxonomyId) {
      if (isNaN(Number(taxonomyId))) {
        url += `&slug=${taxonomyId}`;
      } else {
        url += `&regions=${taxonomyId}`;
      }
    }

    url += '&orderby=title&order=asc';

    const response = await fetch(url);
    const postData = await response.json();

    // Filter out the current page by comparing the slug or ID
    const filteredPosts = postData.filter((post: CourseData) => post.slug !== currentSlug);

    return filteredPosts;
  };

  const { data: posts } = useQuery<CourseData[]>(['posts', taxonomyId, currentSlug], fetchPosts);

  return posts ?? [];
}

export function useFetchCustomTaxonomy(slug: string): RegionData[] {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parentUrl = process.env.SITE_URL + `/wp-json/wp/v2/region?slug=${slug}`;
        const parentResponse = await fetch(parentUrl);
        const parentData = await parentResponse.json();

        if (parentData.length > 0) {
          const parentId = parentData[0].id;

          const childrenUrl = process.env.SITE_URL + `/wp-json/wp/v2/region?parent=${parentId}&per_page=30`;
          const childrenResponse = await fetch(childrenUrl);
          const childrenData = await childrenResponse.json();
          const categoryData = [parentData[0], ...childrenData];
          setData(categoryData);
        } else {
          console.log(`Parent category not found with slug: ${slug}`);
        }
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };

    fetchData();
  }, [slug]);

  return data;
}

export function useFetchMenus(menuId: number): MenuData[] {
  const [menus, setMenus] = useState<MenuData[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(process.env.SITE_URL + `/wp-json/wp-api-menus/v2/menus/${menuId}`);
        const menusData = await response.json();
        setMenus(menusData);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  return menus;
}

export function useFetchGoogleRatings(name: string, address: string) {
  const [ratings, setRatings] = useState<number | null>(null);

  useEffect(() => {
    const fetchGoogleRatings = async () => {
      try {
        const response = await fetch(`/api/google-ratings?name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}`);
        const data = await response.json();
        const rating = data.rating;
        
        setRatings(rating);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching Google rating:', error);
        setRatings(null);
      }
    };

    fetchGoogleRatings();
  }, [name, address]);

  return ratings;
}

export function useFetchPostsBySearch(searchQuery: string): CourseData[] {
  const [posts, setPosts] = useState<CourseData[]>([]);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    const fetchData = async () => {
      try {
        if (searchQuery) {
          const url = process.env.SITE_URL + `/wp-json/wp/v2/directory?_embed&search=${encodeURIComponent(searchQuery)}`;

          const response = await fetch(url);
          const postData = await response.json();

          if (isMounted) {
            setPosts(postData);
          }
        } else {
          // Clear the posts when the search query is empty
          if (isMounted) {
            setPosts([]);
          }
        }
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  return posts;
}
