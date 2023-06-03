-- public.dishes definition

-- Drop table

-- DROP TABLE public.dishes;

CREATE TABLE public.dishes (
	id int4 NOT NULL,
	"name" varchar(255) NULL,
	price numeric(10, 2) NULL,
	restaurant_id int4 NULL,
	photo bytea NULL,
	CONSTRAINT dishes_pkey PRIMARY KEY (id),
	CONSTRAINT dishes_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id)
);

-- public.restaurants definition

-- Drop table

-- DROP TABLE public.restaurants;

CREATE TABLE public.restaurants (
	id int4 NOT NULL,
	"name" varchar(255) NULL,
	"location" varchar(255) NULL,
	contact_number varchar(20) NULL,
	CONSTRAINT restaurants_pkey PRIMARY KEY (id)
);