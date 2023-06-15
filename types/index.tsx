export type CourseData = {
  // Define the properties you expect in the course data object
  id: number;
  categories: number[];
  categoryID: Number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded: {
    'wp:featuredmedia': {
      '0': {
        source_url: string;
      };
    },
    'wp:term': {
      '0': {
        name: string;
        slug: string;
      }[];
    }
  },
  name: string;
  acf: {
    about: string;
    image_carousel: {
      '0': {
        url: string;
      }
    }
    facilities: {
      facility_name: string;
    }[];
    region: string;
    contact: {
      address: string;
      email: string;
      website: string;
      number: number;
    },
    quick_info: {
      par: string;
      length: string;
      type: string;
    }
  };
  slug: string;
  link: string;
};

export type RegionData = {
  name: string;
  slug: string;
  description: string;
  id: number;
  count: number;
  _embedded: {
    'wp:featuredmedia': {
      '0': {
        source_url: string;
      };
    }
  },
  acf: {
    image: string;
  }
}

type MenuItem = {
  id: number;
  order: number;
  parent: number;
  title: string;
  url: string;
  attr: string;
  target: string;
  classes: string;
  xfn: string;
  description: string;
  object_id: number;
  object: string;
  object_slug: string;
  type: string;
  type_label: string;
  children?: MenuItem[];
};

export type MenuData = {
  ID: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  items:  MenuItem[];
  meta: {
    links: {
      collection: string;
      self: string;
    };
  };
}

export type FilterValues = {
  rating?: string;
  type?: string;
  price?: string;
  distance?: string;
  sortBy?: string;
};
