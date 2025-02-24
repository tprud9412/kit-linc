// material-ui
import { Grid, Stack, Box, Typography, Avatar, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { tagList } from './constant';
const TechTag = ({ tag }) => {
    return (
        <Box>
            {tagList.map((tags, index) =>
                tags.tagName === tag ? (
                    <Box
                        key={index}
                        sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, bgcolor: tags.color, border: 0, color: tags.text }}
                    >
                        <Box sx={{ fontSize: 14 }}>{tag}</Box>
                    </Box>
                ) : null
            )}
        </Box>
    );
};

const fieldTagList = ['IT분야', '그린에너지분야', '음식료', '섬유의복', '목제종이', '석유화확', '비금속', '운송장비'];

const FieldTag = ({ fieldTag }) => {
    return (
        <Box>
            {fieldTagList.map((fieldTags, index) =>
                fieldTags === fieldTag ? (
                    <Box key={index} sx={{ border: 1, borderRadius: 1, px: 1, py: 0.5, mr: 1, borderColor: 'grey.500' }}>
                        <Box sx={{ fontSize: 10 }}>{fieldTag}</Box>
                    </Box>
                ) : null
            )}
        </Box>
    );
};

const TechPost = ({ project, index }) => {
    return (
        <>
            <Grid item xs={12}>
                <Link to={`/difficult-techs/${project.requestForm}/${project.postId}`} style={{ textDecoration: 'none' }}>
                    <MainCard title="" codeHighlight>
                        <Box>
                            <Box>
                                <Grid container>
                                    <Grid item sx={{ maxWidth: '500px', height: '50px' }} alignItems="flex-end">
                                        <Typography
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden'
                                            }}
                                            variant="h3"
                                        >
                                            {project.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ display: 'flex', ml: 1 }}>
                                            {project.tags.map((tag, index) => (
                                                <TechTag key={index} tag={tag} />
                                            ))}
                                            <Typography sx={{ ml: 0, mt: 0.8 }}>{project.date}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="flex-end">
                                    <Typography variant="subtitle1" component="p" sx={{ mb: 1 }}>
                                        {project.requestForm}
                                    </Typography>
                                    <Box sx={{ display: 'flex', mb: 1, ml: 1 }}>
                                        {project.field.map((fieldTag, index) => (
                                            <FieldTag key={index} fieldTag={fieldTag} />
                                        ))}
                                    </Box>
                                </Grid>
                                <Divider sx={{ background: 'primary.main', borderBottomWidth: 3, mb: 1.5 }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ flex: 2, pr: 2 }}>{project.content}</Box>
                                <Box
                                    style={{
                                        paddingLeft: '10px',
                                        borderStyle: 'solid',
                                        borderColor: 'rgba(0, 0, 0, 0.12)',
                                        borderWidth: '0 0 0 2px'
                                    }}
                                />
                                <Box sx={{ flex: 1, pl: 2 }}>
                                    <Stack spacing={2}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <Avatar alt="Remy Sharp" src={project.company.logo} />
                                            </Grid>
                                            <Grid item xs={9}>
                                                {project.company.name}
                                            </Grid>
                                        </Grid>
                                        <Box>{project.company.address} </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </MainCard>
                </Link>
            </Grid>
        </>
    );
};

export default TechPost;
