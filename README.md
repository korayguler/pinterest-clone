## Pinterest React (Next.js) Clone

### How to run localside

```bash
# Clone this repository
$ git clone https://github.com/korayguler/pinterest-clone

# Go into the repository
$ cd pinterest-clone


# Install dependencies
$ npm install

# Start the backend server
$ npm run dev

```

### Tech Stack

- react
- react-dom
- next

### Other plugins

- react-stack-grid
- sass
- svgr
- classnames

### Prerequisite

- node
- npm

### TODO

- [ ] Pinler iç içe geçiyor :bug
- [ ] DiscoverPin componenti tamamlanıp data çekilecek

  <StackGrid
  vendorPrefix={true}
  columnWidth={235}
  gutterWidth={15}
  gutterHeight={40}
  duration={1000}
  itemComponent={'div'}
  gridRef={(grid) => (this.grid = grid)} >
  {DummyData.map((e) => (
  <Pin
              className='pin'
              title='Test Pin'
              desc='Test pin for my pinterest clone'
              image={e.image}
              href='http://korayguler.com/'
            />
  ))}
  </StackGrid>
